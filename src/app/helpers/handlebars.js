const Handlebars = require('handlebars');
module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {

        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'bi bi-arrow-down-up',
            asc: 'bi bi-sort-alpha-up',
            desc: 'bi bi-sort-alpha-down-alt',
        };
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        }
        const icon = icons[sortType];
        const type = types[sortType]

        const address = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)
        const output = `<a href="${address}">
        <span class="${icon}" style="font-size: 22px;"></span>
      </a>`;
        return new Handlebars.SafeString(output);
    }
}