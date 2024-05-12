<?php
$sid = $_GET['sid'] ?? null;
if ($sid === null) {
    echo "Please provide a valid student ID.";
} else {
    $jsonData = file_get_contents('students.json');
    $students = json_decode($jsonData, true);
    $student = array_filter($students, function ($s) use ($sid) {
        return $s['sid'] == $sid;
    });
    if (empty($student)) {
        echo "Student not found.";
    } else {
        echo json_encode(array_values($student)[0]);
    }
}
?>
