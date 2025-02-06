$(() => {

    // Get token from URL
    const urlParams = new URLSearchParams(window.location.search);

    // Check if token is present in URL
    if (!urlParams.has('token')) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid token!',
        });

        return;
    }

    // Get token from URL
    const token = urlParams.get('token');

    // console.log("Token: ", token);   
    
    const resetPassword = async (password, token) => {
        try {

            const url = `/backend/api/v1/resetPassword`;

            const headers = {
                'Content-Type': 'application/json'
            };

            const options = {
                method: 'POST',
                headers,
                body: JSON.stringify({ password, token }),
            };

            const response = await fetch(url, options);

            const data = await response.json();

            if (!response.ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: typeof data?.message === 'string' ? data.message : 'Something went wrong!',
                });

                return;
            };

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: typeof data?.message === 'string' ? data.message : 'Password reset successfully!',
            })
            .then(() => {
                $('#resetPasswordForm').trigger('reset');
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    $('#resetPasswordForm').submit((e) => {
        e.preventDefault()
        const password = $('#password').val()
        const confirmPassword = $('#confirmPassword').val()
        if (password !== confirmPassword) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match!',
          });

          return;
        };

        // Reset password
        resetPassword(password, token);
        
    });
})
