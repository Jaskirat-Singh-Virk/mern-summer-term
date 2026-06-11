const students  = [
    {
        name : "abc",
        course : "full stack development",
        marks : [22,19,25,30,27]
    },
    {
        name : "def",
        course : "full stack development",
        marks : [22,19,25,30,27]
    },
    {
        name : "ghi",
        course : "full stack development",
        marks : [22,19,25,30,27]
    },
    {
        name : "jkl",
        course : "full stack development",
        marks : [22,19,25,30,27]
    }
]


/*
// convert the given objects in array in below format 

    {
        name : "abc",
        course : "full stack development",
        marks : [22,19,25,30,27].
        totalmarks : 123,
        percentage : 82,
        resultstatus : "pass"
    }

// if percentage is less than 60 resultstatus should be fail

*/

const updatedStudents = students.map(student => {
    const totalmarks = student.marks.reduce((acc, mark) => {return acc + mark}, 0);
    const percentage = ((totalmarks / 150) * 100).toFixed(2);
    const resultstatus = percentage >= 60 ? "pass" : "fail";

    return {
        ...student,
        totalmarks,
        percentage,
        resultstatus
    };
});

