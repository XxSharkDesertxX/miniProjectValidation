<template>
    <div>
      <h2>
        {{ title| Capi}}
      </h2>
      <One one="TitleThree" tow="EmailThree" three="PhoneThree"/>
    </div>
</template>

<script>
export default {
  name: 'Three',
  data() {
    return {
        title:'Title For Page Three ... '
    }
  },
}
</script>
