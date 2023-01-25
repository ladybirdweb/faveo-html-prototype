import Images from "./Images";

export const searchBy = [
    {
        name: "Contact",
        id: 1
    },
    {
        name: "ID",
        id: 2
    },
    {
        name: "Subject",
        id: 3
    }
];

export const dueDate =[
    {
        id:1,
        day:"Today",
        date:"Dec 27, Tue, 11:59 PM"
    },
    {
        id:1,
        day:"Tomorrow",
        date:"Dec 27, Tue, 11:59 PM"
    },
    {
        id:1,
        day:"This week",
        date:"Dec 27, Tue, 11:59 PM"
    },
    {
        id:1,
        day:"Next week",
        date:"Dec 27, Tue, 11:59 PM"
    },
    {
        id:1,
        day:"This month",
        date:"Dec 27, Tue, 11:59 PM"
    },
    {
        id:1,
        day:"Pick date and time",
    }
];

export const groupDropDown = [
    {
        name: "Escalations",
        id: 1
    },
    {
        name: "No Group",
        id: 2
    },
    {
        name: "Biling",
        id: 3
    },
    {
        name: "Customer Support",
        id: 4
    }
];

export const statusPopupData = [
    {
        name: "Open",
        id: 1
    },
    {
        name: "Pending",
        id: 2
    },
    {
        name: "Resolved",
        id: 3
    },
    {
        name: "Closed",
        id: 4
    }, {
        name: "Waiting on Customer",
        id: 5
    },
    {
        name: "Waiting on Third Party",
        id: 6
    }
];

export const propertyPopupData = [
    {
        name: "Low",
        id: 1,
        color:"#DD1F1F"
    },
    {
        name: "Medium",
        id: 2,
        color:"#DA8608"
    },
    {
        name: "High",
        id: 3,
        color:"#1F0FD6"
    },
    {
        name: "Urgent",
        id: 4,
        color:"#B642C9"
    }
];

export const replyPopupData = [
    {
        name: "Reply",
        id: 1,
        image:Images.Reply
    },
    {
        name: "Add Note",
        id: 2,
        image:Images.AddNote
    },
    {
        name: "Forward",
        id: 3,
        image:Images.Forward
    },
];

export const threeDots = [
    {
        name: "Close",
        id: 1,
        image:Images.GroupClose
    },
    {
        name: "Scenario",
        id: 2,
        image:Images.GroupScenario
    },
    {
        name: "Log time",
        id: 3,
        image:Images.LogTime
    },
    {
        name: "Merge",
        id: 4,
        image:Images.GroupMerge
    },
    {
        name: "Due Date",
        id: 5,
        image:Images.GroupDueDate
    },
    {
        name: "Spam",
        id: 6,
        image:Images.Email
    },
    {
        name: "Delete",
        id: 7,
        image:Images.trash
    },
    {
        name: "Watchers",
        id: 8,
        image:Images.Watchers
    },
];

export const emailDropDown = [
    {
        name: "Support@infoxeron.faveo.com",
        id: 1
    },
]