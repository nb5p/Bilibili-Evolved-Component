exports.component = {
  name: "removeChargeBtn",
  displayName: "移除充电按钮",
  description: {
    "zh-CN": "移除关注按钮左侧的充电按钮",
  },
  entry: () => {},
  instantStyles: [
    {
      name: "removeCharge",
      style: ".old-charge-btn, .new-charge-btn { display: none !important; }",
    },
  ],
  tags: [
    {
      name: "style",
      displayName: "样式",
      color: "#8BC34A",
      icon: "mdi-palette-outline",
      order: 2,
    },
  ],
};
