Feature: Api Employees

    @Create
    Scenario Outline: Creates new Employee
        Given I send a request with <name>, <salary>, <age>
        When Get Response
        Then status response is 200

        @PreProd
        Examples:
            | name  | salary | age |
            | John  | 3000   | 20  |
            | Peter | 300    | 25  |
            | Juan  | 5000   | 33  |
            | Brian | 60     | 18  |

        @Smoke
        Examples:
            | name   | salary | age |
            | Hans   | 3000   | 20  |
            | Martin | 300    | 25  |
            | Mark   | 5000   | 33  |
            | George | 60     | 18  |

    @Get
    Scenario: Get Employees
        Given I send a get request
        When Get Response data
        Then Status is 200