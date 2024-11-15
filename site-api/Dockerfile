# Use a imagem oficial do PHP com Apache
FROM php:8.2-apache

# Instalar dependências
RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Instalar o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Setar diretório de trabalho
WORKDIR /var/www/html

# Copiar arquivos do projeto
COPY . /var/www/html

# Configurar permissões
RUN chown -R www-data:www-data /var/www/html \
    && a2enmod rewrite

# Instalar dependências do Laravel
RUN composer install

# Configurar o arquivo .env
COPY .env.example .env
RUN php artisan key:generate

# Expôr a porta 8000
EXPOSE 8000

# Rodar o Laravel na porta 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
