const kirim = document.getElementById('kirim');
// const nama = document.getElementById('nama').innerHTML;


// nilai_form = document.getElementById("input_form").value;


kirim.addEventListener('click', function () {
    namaForm = document.getElementById("nama").value;
    nikForm = document.getElementById("nik").value;
    umurForm = document.getElementById("umur").value;
    alamatForm = document.getElementById("alamat").value;
    penghasilan1Form = document.getElementById("penghasilan1").value;
    penghasilan2Form = document.getElementById("penghasilan2").value;
    console.log('nama :' + namaForm);
    console.log('nik :' + nikForm);
    console.log('umur :' + umurForm);
    console.log('alamat :' + alamatForm);
    console.log('penghasilan sebelum pandemi :' + penghasilan1Form);
    console.log('penghasilan setelah pandemi :' + penghasilan2Form);
    alert('Data Terkirim ke Log \n' +
        'Nama : ' +
        namaForm +
        'Nik : \n' +
        nikForm +
        '\n Umur : ' +
        umurForm +
        ' \n alamat : ' +
        namaForm +
        '\n Penghasilan sebelum pandemi : ' +
        penghasilan1Form +
        '\n Penghasilan setelah pandemi ' +
        penghasilan2Form);

});