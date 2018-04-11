import area from '../config/area'
export default (_self, h) => {
  return [
    h('ICascader', {
      style: {
        width: '200px',
        display: 'inline-block'
      },
      props: {
        placeholder: _self.obj.placeholder || "请选择详细地址",
        data: area,
        value: _self.obj.value || [],
        filterable: false
      },
      on: {
        "handleCascaderValue" (arr) {
          if (!_self.obj.name) {
            return false;
          }
          _self.obj.value = arr;
          _self.$emit('handleChangeVal', arr);
        }
      }
    }),
    h("Input", {
      props: {
        placeholder: _self.obj.placeholder || "请输入详细地址",
        ref: 'details_address',
        value: (_self.obj.value[3] || {})
          .name
      },
      style: {
        width: 'auto',
        display: _self.obj.value.length <= 0 ? 'none' : 'inline-block',
        'margin-left': '5px',
        'min-width': '300px'
      },
      on: {
        "on-change": function(val) {
          if (!_self.obj.name) {
            return false;
          }
          let temp_data = _self.obj.value.slice(0, 3);
          _self.obj.value = temp_data.concat(val.currentTarget.value);
          _self.$emit('handleChangeVal', _self.obj.value)
        }
      }
    })
  ]
}
export let addressConf = {
  // 对应数据库内类型
  type: 'address',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '详细地址',
  placeholder: '请输入详细地址',
  // 是否显示行内元素
  inlineBlock: false,
  // 是否必填
  require: true,
  // 是否多选
  multiple: false,
  // 表单name
  name: '',
  // 绑定的值
  value: [],
  // 验证错误提示信息
  ruleError: '请选择并输入详细地址'
}