        // Set current date
        document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Dynamic pricing based on plan duration
        function updatePricing(duration) {
            const prices = {
                'monthly': { basic: 499, pro: 1299, enterprise: 3999 },
                'annual': { basic: 449, pro: 1169, enterprise: 3599 },
                '2year': { basic: 399, pro: 999, enterprise: 2999 }
            };
            
            const suffixes = {
                'monthly': 'per month',
                'annual': 'per month (annual billing)',
                '2year': 'per month (2-year billing)'
            };
            
            document.getElementById('basic-price').textContent = '$' + prices[duration].basic;
            document.getElementById('pro-price').textContent = '$' + prices[duration].pro;
            document.getElementById('enterprise-price').textContent = '$' + prices[duration].enterprise;
            
            document.querySelectorAll('.price-period').forEach(el => {
                el.textContent = suffixes[duration];
            });
        }
        
        // Simple animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.service-card, .integration-card, .testimonial-card').forEach(card => {
            observer.observe(card);
        });
        
        // Initialize with monthly pricing
        updatePricing('monthly');
