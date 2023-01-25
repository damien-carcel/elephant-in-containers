FROM debian:bullseye-slim

ARG DEBIAN_FRONTEND=noninteractive
ENV XDEBUG_ENABLED=0

RUN echo 'APT::Install-Recommends "0" ; APT::Install-Suggests "0" ;' > /etc/apt/apt.conf.d/01-no-recommended && \
    echo 'path-exclude=/usr/share/doc/*' > /etc/dpkg/dpkg.cfg.d/path_exclusions && \
    echo 'path-exclude=/usr/share/groff/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions && \
    echo 'path-exclude=/usr/share/info/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions && \
    echo 'path-exclude=/usr/share/linda/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions && \
    echo 'path-exclude=/usr/share/lintian/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions && \
    echo 'path-exclude=/usr/share/locale/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions && \
    echo 'path-exclude=/usr/share/man/*' >> /etc/dpkg/dpkg.cfg.d/path_exclusions && \
    apt-get update && \
    apt-get --yes install apt-transport-https ca-certificates gpg gpg-agent wget && \
    echo 'deb https://packages.sury.org/php/ bullseye main' > /etc/apt/sources.list.d/sury.list && \
    wget -O sury.gpg https://packages.sury.org/php/apt.gpg && apt-key add sury.gpg && rm sury.gpg && \
    apt-get update && \
    apt-get --yes install \
        php8.2-apcu \
        php8.2-cli \
        php8.2-curl \
        php8.2-intl \
        php8.2-opcache \
        php8.2-xdebug \
        php8.2-xml \
        php8.2-zip \
        unzip && \
    apt-get clean && \
    apt-get --yes autoremove --purge && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Configure PHP CLI
COPY docker/app.ini /etc/php/8.2/cli/conf.d/99-app.ini

# Configure XDEBUG and make XDEBUG activable at container start
COPY docker/xdebug.ini /etc/php/8.2/cli/conf.d/99-app-xdebug.ini

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
RUN chmod +x /usr/local/bin/composer
