import Vue from 'vue';

const Cap= (data)=>{
    return data.toUpperCase();
};

Vue.filter('Capi', Cap);