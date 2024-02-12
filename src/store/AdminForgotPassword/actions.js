import axios from 'axios';

export default {
    forgotPassword(context, payload) {
        context.commit('setLoading', true);

        axios.post(process.env.VUE_APP_URL_API_BACKEND + '/admin/forgot-password', {
            email: payload.email,
            recaptcha: payload.recaptcha,
            url: window.location.origin + '/admin/reset-password'
        })
        .then(response => {
            context.commit('setLoading', false);

            // eslint-disable-next-line no-prototype-builtins
            if (response.data.hasOwnProperty('success') && response.data.success) {
                context.commit('setSuccess', true);
                // eslint-disable-next-line no-prototype-builtins
            }
        })
        .catch(e => {
            context.commit('setLoading', false);
            context.commit('setSuccess', false);

            if (e.response.data) {
                const dataError = e.response.data;
                // eslint-disable-next-line no-prototype-builtins
                if (dataError.hasOwnProperty('code_error')) {
                    dataError.code_error = dataError.code_error.replace('.', '_');
                    context.commit('setError', dataError.code_error);
                    // eslint-disable-next-line no-prototype-builtins
                } else if (dataError.hasOwnProperty('errors')) {
                    context.commit('setError', dataError.message);
                }
            }
        });
    }
}