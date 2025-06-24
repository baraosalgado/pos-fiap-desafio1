
        const form = document.getElementById('groupForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(form);
            const data = {};

            formData.forEach((value, key) => {
                data[key] = value;
            });

            console.log('Dados enviados:', data);
            alert('Formulário enviado com sucesso! Veja os dados no console.');

            form.reset();
        });
   