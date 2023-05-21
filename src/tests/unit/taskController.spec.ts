import { getAllTasks } from '../../controllers/taskController'
import { getMockReq, getMockRes } from '@jest-mock/express'

describe('getAllTasks', () => {
  test('should send all tasks via res', () => {
    //Arrange
    const reqMock = getMockReq()
    const { res } = getMockRes()
  
    //Act
    getAllTasks(reqMock, res)
    
    //Assert
    expect(res.send).toBeCalledTimes(1)
  })
})
