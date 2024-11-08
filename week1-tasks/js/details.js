// Get the courseId from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get('courseId');

// Retrieve course data based on courseId
if (courseId && courseData[courseId]) {
    const course = courseData[courseId];

    // Populate HTML elements with course details
    document.getElementById("course-title").textContent = course.title;
    document.getElementById("course-hours").textContent = course.hours;
    document.getElementById("course-price").textContent = course.price;

    const topicsList = document.getElementById("course-topics");
    course.topics.forEach(topic => {
        const listItem = document.createElement("li");
        listItem.textContent = topic;
        topicsList.appendChild(listItem);
    });
} else {
    // Handle cases where the courseId is invalid or not found
    document.querySelector(".course-details").textContent = "Course details not found.";
}
