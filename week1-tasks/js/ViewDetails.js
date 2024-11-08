function viewCourseDetails(courseId) {
    // Redirect to course-details.html with courseId as a query parameter
    window.location.href = `course-details.html?courseId=${courseId}`;
}


const courseData = {
    1: {
        title: "Front End Development",
        hours: "20 hours",
        price: "$99",
        topics: ["HTML", "CSS", "JavaScript"]
    },
    2: {
        title: "Back End Development",
        hours: "25 hours",
        price: "$129",
        topics: ["Python", "Django", "REST APIs"]
    },
    3: {
        title: "Database Management",
        hours: "15 hours",
        price: "$89",
        topics: ["SQL", "Database Design", "Normalization"]
    },
    // Add details for the remaining courses similarly
};
