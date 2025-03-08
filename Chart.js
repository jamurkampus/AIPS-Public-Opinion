<script>
    function updateCharts() {
        let surveyData = JSON.parse(localStorage.getItem("aipsSurveyData")) || [];
        console.log("Data Survey: ", surveyData); // Cek apakah data masuk

        let q1Yes = surveyData.q1 === "Ya" ? 1 : 0;
        let q1No = surveyData.q1 === "Tidak" ? 1 : 0;
        let q2Yes = surveyData.q2 === "Ya" ? 1 : 0;
        let q2No = surveyData.q2 === "Tidak" ? 1 : 0;

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

    window.onload = updateCharts;
</script>
