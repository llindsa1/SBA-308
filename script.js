/* The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
*/

  //Make sure the assignment group belongs 
  function getLearnerData(course, ag, submissions) 
  {
    function validateAssignmentGroup(group) {
        if (group.course_id !== CourseInfo.id) {
            throw new Error(`ag ${group.id} does not belong to the course ${CourseInfo.id}`);
        }
    }

    //Calculate learner scores
    function processLearner(learner_id, assignmentsMap, groupWeight) {
        let totalScore = 0;
        let totalPoints = 0;
        let learnerResult = {id:learner_id};

     //Loop through submissions and calculate score on assignments
     submissions.filter(submission => submission.learner_id === learnerID)
     .forEach(submission => {const assignment= assignmentsMap[submission.assignment_d];
        if (!assignment)
            return;
    //Skip invalid assignments
    const dueDate= newDate(assignment.due_at);
    const submissionDate = newDate(submission.submission.submitted_at);

    //Skip over assignments that are not due
    if (dueDate > new Date())
        return;
    
    let score= submission.submission.score;
    if (submissionDate > dueDate) {

        //-10% if late
        score-= 0.1 * assignment.points_possible;

    }
    //Calculate % for assignment
    const percentage = (score / assignment.points_possible) * 100;
    learnerResult[assignment.id] = percentage;

    //Calculate score
    totalScore += (score / assignment.points_possible) * assignment.points_possible * groupWeight;
    totalPoints += assignment.points_possible * groupWeight;
    });


  }