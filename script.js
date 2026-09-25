/**
 * Descontaê - Landing Page Logic
 */

// --- META PIXEL CONFIGURATION ---
const META_PIXEL_ID = 'SEU_PIXEL_ID_AQUI'; // Substitua pelo seu ID do Meta Pixel

function initPixel() {
    if (META_PIXEL_ID === 'SEU_PIXEL_ID_AQUI') {
        console.log('Meta Pixel ID not configured. Please update script.js');
        return;
    }

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    n.queue=[];n.push({});n.push(function(){n.push({
    'displayName': 'fbq', 'autoplay': true, 'init': function() {
    fbq('init', META_PIXEL_ID); fbq('track', 'PageView');
    }})})}, window, document, 'script', 'facebook-jssdk.js', 'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', META_PIXEL_ID);
    fbq('track', 'PageView');
}

function trackEvent(eventName) {
    console.log(`Tracking event: ${eventName}`);
    if (typeof fbq === 'function') {
        fbq('track', eventName);
    }
}

// --- UI LOGIC ---

function toggleAccordion(element) {
    const isActive = element.classList.contains('active');

    // Close all others
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
    });

    if (!isActive) {
        element.classList.add('active');
    }
}

// Mobile Fixed CTA Visibility
window.addEventListener('scroll', () => {
    const mobileCta = document.getElementById('mobileCta');
    if (window.scrollY > 400) {
        mobileCta.classList.add('visible');
    } else {
        mobileCta.classList.remove('visible');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initPixel();
});
