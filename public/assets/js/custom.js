function konversiTimestamp(timestamp) {
    // Membuat objek Date dari timestamp
    var tanggalWaktu = new Date(timestamp * 1000);

    // Menggunakan toLocaleString untuk format waktu yang dapat dibaca
    var formatWaktu = tanggalWaktu.toLocaleString('id-ID', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    formatWaktu = formatWaktu.replace(/\./g, ':');

    return formatWaktu;
}