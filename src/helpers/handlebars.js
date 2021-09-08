module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {

        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'fas fa-sort',
            asc: 'fas fa-sort-alpha-down',
            desc: 'fas fa-sort-alpha-down-alt'
        }
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
        }
        const icon = icons[sortType]
        const type = types[sortType]
        return `<a href="?_sort&column=${field}&type=${type}">
                    <i class="${icon}"></i>
                </a>`
    }
}