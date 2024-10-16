# Contoh Pewarna Dynamic

<h1 align="center">
	<br>
		<br>
			<video width="320" height="240" controls>
				<source src="media/anton_Dynamic.mp4" type="video/mp4">
				Your browser does not support the video tag.
			</video>
		<br>
		<br>
	<br>
</h1>

# anton-color

`anton-color` adalah sebuah modul sederhana yang memungkinkan kamu untuk mencetak teks berwarna di terminal dengan berbagai variasi warna, baik untuk teks maupun latar belakang. Selain itu, modul ini juga mendukung efek warna dinamis untuk membuat tampilan terminal lebih menarik.

## Fitur Utama

## Warna Teks
- Black
- Red
- Green
- Yellow
- Blue
- Magenta
- Cyan
- White

## Warna Tambahan
- LightRed
- LightGreen
- LightYellow
- LightBlue
- LightMagenta
- LightCyan
- LightWhite
- DarkGray
- Pink
- Coral
- Lavender
- Teal
- Peach
- BabyBlue
- MintGreen
- SkyBlue
- Amethyst
- Gold
- Silver
- Turquoise

## Warna Latar Belakang (Background Colors)
- bgBlack
- bgRed
- bgGreen
- bgYellow
- bgBlue
- bgMagenta
- bgCyan
- bgWhite

## Warna Latar Belakang Tambahan (Additional Background Colors)
- bgPink
- bgCoral
- bgLavender
- bgTeal
- bgPeach
- bgBabyBlue
- bgMintGreen
- bgSkyBlue
- bgAmethyst
- bgGold
- bgSilver
- bgTurquoise
- bgDarkGray
- bgLightGray
- bgOrange
- bgPurple

## Install Module

Untuk menginstal modul `anton-color`, jalankan perintah berikut di terminal:

```bash
npm install anton-color
```

## Contoh pengguna

### Teks berwarna

gunakan fungsi dari `anton-color`, untuk mencetak teks dengan warna yang diinginkan

```javascript
const color = require('anton-color');

// Teks berwarna merah
console.log(color.red('Ini teks berwarna merah'));

// Latar belakang berwarna merah
console.log(color.bgRed('Ini teks dengan background merah'));
```

### Teks Dynamis dengan warna berubah

module ini juga mendukun efek warna dinamis

```javascript
const Dynamic = require('anton-color').dynamicColors;

// Tampilkan teks dengan efek warna dinamis
Dynamic('Dynamic Shifting Colors in Action!');
```

## report bug

<span style="color: red;">[Report bug](https://wa.me/6283198645688)</span># anton-color
