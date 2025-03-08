function updateCharts() {
    let surveyData = JSON.parse(localStorage.getItem("aipsSurveyData")) || [];

    console.log("Data Survey: ", surveyData); // Debugging, cek data di Console

    let q1Yes = surveyData.filter(d => d.q1 === "Ya").length || 0;
    let q1No = surveyData.filter(d => d.q1 === "Tidak").length || 0;
    let q2Yes = surveyData.filter(d => d.q2 === "Ya").length || 0;
    let q2No = surveyData.filter(d => d.q2 === "Tidak").length || 0;

    console.log("Hasil Filter: ", { q1Yes, q1No, q2Yes, q2No });

    let ctx1 = document.getElementById("chart1").getContext("2d");
    new Chart(ctx1, {
        type: "pie",
        data: {
            labels: ["Ya", "Tidak"],
            datasets: [{ data: [q1Yes, q1No], backgroundColor: ["#36a2eb", "#ff6384"] }]
        },
        options: { title: { display: true, text: "Pemahaman AI dalam Politik" } }
    });

    let ctx2 = document.getElementById("chart2").getContext("2d");
    new Chart(ctx2, {
        type: "pie",
        data: {
            labels: ["Ya", "Tidak"],
            datasets: [{ data: [q2Yes, q2No], backgroundColor: ["#36a2eb", "#ff6384"] }]
        },
        options: { title: { display: true, text: "AI Meningkatkan Transparansi" } }
    });
}
