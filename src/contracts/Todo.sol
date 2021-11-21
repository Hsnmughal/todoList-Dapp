pragma solidity^0.8.7;

contract Todo{
    
    uint128 public taskCount = 0;
    
    struct Task{
        uint128 id;
        string value;
        bool completed;
    }
    
    constructor() public {
        createTask("This is the default Todo");
    }
    
    mapping(uint => Task) public task;
    
    function createTask(string memory _content) public {
        taskCount ++;
        task[taskCount] = Task(taskCount, _content, false);
    }
}