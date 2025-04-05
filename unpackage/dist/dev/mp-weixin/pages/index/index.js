"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent(new UTSJSONObject({
  data() {
    return {
      currentForm: "login",
      username: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: new UTSJSONObject({
    switchForm() {
      this.currentForm = this.currentForm === "login" ? "register" : "login";
      this.username = "";
      this.password = "";
      this.confirmPassword = "";
    },
    handleSubmit() {
      if (!this.username || !this.password) {
        common_vendor.index.showToast({
          title: "请填写完整的登录信息",
          icon: "none"
        });
        return null;
      }
      if (this.currentForm === "register") {
        if (this.password !== this.confirmPassword) {
          common_vendor.index.showToast({
            title: "两次输入的密码不一致",
            icon: "none"
          });
          return null;
        }
        common_vendor.index.showToast({
          title: "注册功能暂未开放",
          icon: "none"
        });
        return null;
      }
      if (this.username === "admin" && this.password === "123") {
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "success",
          duration: 1500
        });
        setTimeout(() => {
          common_vendor.index.navigateTo({
            url: "/pages/home/home"
          });
        }, 1500);
      } else {
        common_vendor.index.showToast({
          title: "用户名或密码错误",
          icon: "none"
        });
      }
    }
  })
}));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.currentForm === "login" ? "登录" : "注册"),
    b: $data.username,
    c: common_vendor.o(($event) => $data.username = $event.detail.value),
    d: $data.password,
    e: common_vendor.o(($event) => $data.password = $event.detail.value),
    f: $data.currentForm === "register"
  }, $data.currentForm === "register" ? {
    g: $data.confirmPassword,
    h: common_vendor.o(($event) => $data.confirmPassword = $event.detail.value)
  } : {}, {
    i: common_vendor.t($data.currentForm === "login" ? "登录" : "注册"),
    j: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args)),
    k: common_vendor.t($data.currentForm === "login" ? "没有账号？去注册" : "已有账号？去登录"),
    l: common_vendor.o((...args) => $options.switchForm && $options.switchForm(...args)),
    m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
