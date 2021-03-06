const Handlebars = require("handlebars");

module.exports = {
  //{{sum 1 2}}
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    //kiểm tra type có phải field có phải của field muốn sắp xếp
    const sortType = field === sort.column ? sort.type : "default";

    const icons = {
      default: "oi oi-elevator",
      asc: "oi oi-sort-ascending",
      desc: "oi oi-sort-descending",
    };
    //Xử lý type ngược lại
    const types = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };
    const icon = icons[sortType];
    const type = types[sortType];

    const href = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`
    );

    const output = `<a href="${href}">
            <span class="${icon}"></span>
        </a>`;
    return new Handlebars.SafeString(output);
  },
  ifEven: (a,options) => {
    if (a % 2 == 1) {
      return options.fn(this);
    }
    return options.inverse(this);
  },
};
