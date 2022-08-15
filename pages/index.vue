<template>
    <div>
      <h2>
        {{title | Capi}}
      </h2>
      <One one="TitleOne" tow="EmailOne" three="PhoneOne"/>
    </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
        title:'Title For Page One ... '
    }
  },
}
</script>
