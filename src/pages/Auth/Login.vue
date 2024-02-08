<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="wrap">
            <div class="img" style="background-image: url('img/logo_login.jpg');"></div>
            <div class="login-wrap p-4 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Sign In</h3>
                </div>
              </div>
              <form action="#" class="signin-form">
                <div class="form-group mt-3">
                  <input type="text" class="form-control" required v-model="username">
                  <label class="form-control-placeholder" for="username">Username</label>
                </div>
                <div class="form-group">
                  <input id="password-field" type="password" class="form-control" required v-model="password">
                  <label class="form-control-placeholder" for="password">Password</label>
                  <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control btn btn-primary rounded submit px-3" @click="submitLogin()">Sign In</button>
                </div>
                <div class="form-group d-md-flex">
                  <div class="w-50 text-left">
                    <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
                      <input type="checkbox" checked>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="w-50 text-md-right">
                    <a href="#">Forgot Password</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
@import '../../assets/css/style_login.css';
</style>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    ...mapActions([
      'login',
    ]),

    submitLogin() {
      const credentials = {
        username: this.username,
        password: this.password
      };
      this.login(credentials)
        .then((res) => {
          console.log(res)
          // Login successful, you can navigate to another page or perform any other actions
        })
        .catch(error => {
          // Handle login failure, display error message, etc.
          console.error(error);
        });
    }
  }
}
</script>

