// Fungsi utama untuk menampilkan detail keahlian
function expandDetail(expertise) {
    const title = document.getElementById('detail-title');
    const desc = document.getElementById('detail-desc');
    const panel = document.getElementById('detail-panel');

    // Validasi keberadaan elemen
    if (title && desc && panel) {
        panel.classList.remove('hidden'); // Menampilkan panel dengan menghapus class 'hidden'

        // Update konten berdasarkan expertise
        switch (expertise) {
            case 'ml':
                title.innerHTML = 'End-to-End ML';
                desc.innerHTML = 'Comprehensive machine learning workflows from data collection to model deployment.';
                break;
            case 'ai':
                title.innerHTML = 'Productionalizing ML/AI';
                desc.innerHTML = 'Streamlining the integration of machine learning models into production environments.';
                break;
            case 'data':
                title.innerHTML = 'Big Data & Data Pipeline';
                desc.innerHTML = 'Handling large-scale data processing and analysis pipelines efficiently.';
                break;
            case 'cloud':
                title.innerHTML = 'Cloud Computing AWS';
                desc.innerHTML = 'Utilizing AWS cloud services to enhance computing and storage capabilities.';
                break;
            default:
                title.innerHTML = 'Details Not Available';
                desc.innerHTML = 'Please select a valid expertise to view more information.';
                break;
        }
    } else {
        console.error('Error: One or more elements not found!');
    }
}

// Highlight.js untuk memproses syntax code highlight
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
});
