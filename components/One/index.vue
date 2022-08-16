<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="title"
            :rules="[rules.required, rules.counter,rules.english]"
            :label='one'
            counter
            maxlength="20"
            @keyup="showusername"
              ref="observer"
              :v-slot="{ invalid }"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            :label="tow"
          ></v-text-field>
          <small>{{email | Capi}}</small>
        </v-col>

         <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="phone"
            :rules="[rules.required, rules.phone, rules.counters,rules.number,rules.cahgneEn]"
            counter="11"
            :label="three"
          ></v-text-field>
        </v-col>  
        
      </v-row>
    </v-container>
      <h1>{{username | Capi}}</h1>
  </v-form>
</template>

<script>
  export default {
    props:[
        'one',
        'tow',
        'three'
    ],
    data () {
      return {
        title: '',
        email: '',
        phone:'',
        username:'',
        invalid:'',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          english: v => /^[a-zA0-9\s]*$/.test(v) || 'Only get characters , En and Number',
          number:value => value[0] == '0' & value[1] =='9' || 'Number must starter with 09 ......',
          counters : value => value.length ==11 || 'Min 11 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            return pattern.test(value) || 'Invalid e-mail.'
          },
          phone: value=>{
            const patt = /[0-9]/
            return patt.test(value)|| 'invalid p-hone - please write number ...'
          },

          cahgneEn:v => /^[0-9\s]*$/.test(v) || 'Only get number En',
        },
      }
    },
    methods: {
      showusername(){
        if (this.$refs.observer.valid) {
          this.username = this.$hello(this.title)
        }else{
          return; 
        }
      }
    },
  }
</script>

