<template>
    <div>
      <h2>
        {{title | Capi}}
      </h2>
      <One one="TitleTwo" tow="EmailTwo" three="PhoneTwo"/>

    </div>
</template>

<script>
export default {
  name: 'Two',
  data() {
    return {
        title:'Title For Page Tow ... '
    }
  },
}
</script>
