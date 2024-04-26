// These are test cases for the to do list.
const TodoList = artifacts.require('./TodoList.sol')
contract('TodoList', (accounts) => {
    before(async () => {
        this.todoList = await TodoList.deployed()
    })
    // Test that the address is real and defined.
    it('deploys tasks', async () => {
        const address = await this.todoList.address
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
    })
    // Test that the correct tasks are running.
    it('lists tasks', async () => {
        const taskCount = await this.todoList.taskCount()
        const task = await this.todoList.tasks(taskCount)
        assert.equal(task.id.toNumber(), taskCount.toNumber())
        assert.equal(task.content, 'Your to-do list.')
        assert.equal(task.completed, false)
        assert.equal(taskCount.toNumber(), 1)
    })
    // Test that the correct tasks have been created.
    it('creates tasks', async () => {
        const result = await this.todoList.createTask("New task")
        const taskCount = await this.todoList.taskCount()
        assert.equal(taskCount, 2)
        const event = result.logs[0].args
        // CONTINUE HERE
    })
})
