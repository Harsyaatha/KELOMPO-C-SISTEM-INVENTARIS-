$(function () {

    // KLIK TOMBOL LOGIN
    $("#btnLogin").on("click", function () {

        // Mengambil nilai input EasyUI
        var username = $("#username").textbox("getValue");

        var password = $("#password").passwordbox("getValue");

        // Validasi username
        if (username === "") {

            $.messager.alert(
                "Peringatan",
                "Username harus diisi!",
                "warning"
            );

            return;
        }

        // Validasi password
        if (password === "") {

            $.messager.alert(
                "Peringatan",
                "Password harus diisi!",
                "warning"
            );

            return;
        }

        // DEMO UI SAJA
        $.messager.alert(
            "Berhasil",
            "Form login berhasil diuji. Autentikasi backend belum diaktifkan.",
            "info"
        );

    });

});
