# Laravel VueJS

## References

- Laravel: [https://laravel.com/](https://laravel.com/)
- Vuex: [https://vuex.vuejs.org/installation.html](https://vuex.vuejs.org/installation.html)
- VueRouter: [https://router.vuejs.org/](https://router.vuejs.org/)

## Install

Copy env file
```bash
cp .env.example .env
```

Edit env file

Generate key
```bash
php artisan key:generate
```

Run migrations
```bash
php artisan migrate
```

Run seeders
```bash
php artisan db:seed --class=UsersTableSeeder
```

Install assets
```bash
npm install
npm run dev
```

Run application
```bash
php artisan serve
```
