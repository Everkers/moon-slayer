<template>
  <b-navbar type="is-dark">
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
      >
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        <router-link to="background">
          Wallpapers
        </router-link>
      </b-navbar-item>
      <b-navbar-dropdown label="Profile">
        <b-navbar-item href="#">
          Status
        </b-navbar-item>
        <b-navbar-item href="#">
          Rank
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Contact</strong>
          </a>
          <a class="button is-light">
            About
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {

};
</script>

<style lang='scss' >
.navbar{
    width:100%;
    position:fixed;
    background-color: #121113 !important;
    &-menu{
        @media screen and (max-width: 1023px){
            background-color:#121113 !important;
            .navbar-start{
                .is-active{
                    background-color:unset !important;
                }
                a{
                    &:hover{
                        background-color:unset !important;
                    }
                }
            }
        }
        @media screen and (min-width:1023px){
            .navbar-start{
                .navbar-dropdown{
                    a{
                        color:#000
                    }
                }
            }
        }
        .navbar-start{
            a{
                color:#fff;
            }
        }
    }
}
</style>
