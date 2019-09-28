<template>
  <div>
    <h1>Login</h1>
    <b-row>
      <b-col>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email"
            label-for="input-1"
            description="">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
              :state="emailState">
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="password"
            label-for="input-2"
            description="">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Enter password"
              :state="passwordState">
            </b-form-input>
          </b-form-group>
          <b-row class="float-right">
            <b-col>
              <b-button variant="outline-primary" type="reset">Reset</b-button>
              <b-button variant="primary" type="submit">Log In</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        sentence: 'Welcome to Home Page',
        form: {
          email: '',
          password: '',
        },
        show: true,
      }
    },

    computed: {
      emailState() {
        if (this.form.email.length === 0)
          return null;
        else if (this.form.email.includes('@'))
          return true;
        else
          return false;
      },

      passwordState() {
        if (this.form.password.length === 0)
          return null;
        else if (this.form.password.length > 0)
          return true;
        else
          return false;
      },
    },

    methods: {
      onSubmit(e) {
        alert(JSON.stringify(this.form));
      },
      onReset(e) {
        this.form.email = '';
        this.show = false;
        this.$nextTick(() => this.show = true);
      },
    }
  }
</script>