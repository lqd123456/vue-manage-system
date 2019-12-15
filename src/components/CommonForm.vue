<template>
  <el-form ref="form" :inline="inline" :model="form" label-width="100px">
    <el-form-item v-for="item in formLabel" :key="item.model" :label="item.label">
      <el-input v-if="!item.type" v-model="form[item.model]" :placeholder="'请输入' + item.label" />
      <el-select v-if="item.type === 'select'" v-model="form[item.model]" placeholder="请选择">
        <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-switch v-if="item.type === 'switch'" v-model="form[item.model]" />
      <el-date-picker v-if="item.type === 'date'" v-model="form[item.model]" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" />
    </el-form-item>
    <el-form-item><slot /></el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    inline: Boolean,
    form: Object,
    formLabel: Array
  }
}
</script>

<style lang="scss" scoped></style>
