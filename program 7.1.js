<!DOCTYPE html>

<html>
<head>
<title>Student Constructor</title>
</head>

<body>

<h2>Student Object using Constructor</h2>

<script>

function Student(name,age,course)
{
    this.name = name;
    this.age = age;
    this.course = course;
}

let s1 = new Student("Hansika",18,"IT");

document.write("Name: " + s1.name + "<br>");
document.write("Age: " + s1.age + "<br>");
document.write("Course: " + s1.course);

</script>

</body>
</html>
