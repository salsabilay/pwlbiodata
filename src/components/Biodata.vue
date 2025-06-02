<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="biodata-container">
    <div class="foto-wrapper">
      <img src="@/assets/foto.jpg" alt="Foto Profil" class="foto" />
    </div>
    <h1 class="nama">{{ nama }}</h1>
    <p class="info"><strong>NIM:</strong> {{ nim }}</p>
    <p class="info"><strong>Program Studi:</strong> Teknologi Informasi</p>
    <p class="info"><strong>Universitas:</strong> Universitas Brawijaya</p>
    <p class="info"><strong>Email:</strong> salsabilayekti@gmail.com</p>
    <p class="info"><strong>Keahlian:</strong></p>
    <ul class="skills">
      <li>UI Design</li>
      <li>Konten Digital</li>
      <li>Quality Control</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BiodataComponent',
  data() {
    return {
      nama: 'Salsabila Yekti Aulia Rahmah',
      nim: '225150707111061',
    };
  },
};
</script>

<style scoped>
.biodata-container {
  max-width: 650px;
  margin: 80px auto;
  padding: 40px 30px;
  border-radius: 16px;
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.foto-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.foto {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #aaa;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.nama {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.info {
  font-size: 16px;
  color: #555;
  margin: 6px 0;
}

.skills {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.skills li {
  display: inline-block;
  background:rgb(154, 194, 216);
  color: white;
  padding: 6px 14px;
  margin: 5px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
