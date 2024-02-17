import axios from 'axios';

export default {
    async actionAdminInfo(context) {
        try {
            const adminInfo = await axios.get(process.env.VUE_APP_URL_API_BACKEND + '/admin/admin', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('admin_access_token'),
                    Accept: 'application/json'
                }
            });

            context.commit('setAdminInfo', adminInfo.data.data);
        } catch (error) {
            const adminRfToken = await axios.post(process.env.VUE_APP_URL_API_BACKEND + '/admin/refresh-token',
                {
                    'refresh_token': localStorage.getItem('admin_refresh_token')
                }
                ,{
                headers: {
                    Accept: 'application/json'
                }
            });

            if (adminRfToken.data.hasOwnProperty('access_token')) {
                localStorage.setItem('admin_access_token', adminRfToken.data.access_token);

                try {
                    const adminInfo = await axios.get(process.env.VUE_APP_URL_API_BACKEND + '/admin/admin', {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('admin_access_token'),
                            Accept: 'application/json'
                        }
                    });
                    context.commit('setAdminInfo', adminInfo.data.data);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
}