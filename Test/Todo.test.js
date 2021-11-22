
const Todo = artifacts.require('Todo');

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Todo', () => {

    let todo;

    before(async () => {
        todo = await Todo.new();
        await todo.createTask('Complete this dapp before going to sleep');
    })

    describe('Todo deployment', async () => {
        it('taskCount', async () => {
            const tc = await todo.taskCount();
            assert.equal(tc, 2)
        })

        it('task value', async () => {
            let tv = await todo.task(2);
            tv = tv.value;
            assert.equal(tv, 'Complete this dapp before going to sleep')
        })
    })
    
})