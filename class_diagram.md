```mermaid
classDiagram
direction LR 

    class Message {
	string id
        string content
        string? fileUrl
        Date sentAt
        string senderId
        string discussionId
    }

    class Discussion {
		string id
		string[] usersId
    }

    class User {
		string id
		string firstName
		string lastName
		string? pictureUrl
    }

	User "n"  --> "m" Discussion
	Discussion "1"  --> "n" Message

```