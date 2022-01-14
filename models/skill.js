const skills = [
    {id: 671, skill: 'Get'},
    {id: 672, skill: 'Post'},
    {id: 673, skill: 'Put'},
    {id: 674, skill: 'Delete'},
    {id: 755, skill: 'Crud'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}

function getAll() {
    return skills;
}