let q4Data = [
    surveyData.filter(d => d.q4 === "Bagus").length || 0,
    surveyData.filter(d => d.q4 === "Perlu dikembangkan").length || 0,
    surveyData.filter(d => d.q4 === "Masih ragu").length || 0,
    surveyData.filter(d => d.q4 === "Tidak setuju").length || 0
];
