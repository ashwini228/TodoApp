# Use the official httpd image as the base image
FROM httpd:latest

# Copy custom configuration file(s) to the container
COPY ./usr/local/apache2/conf/httpd.conf

# Copy your web content to the container
COPY ./usr/local/apache2/htdocs/

# Expose port 80 (HTTP)
EXPOSE 80

# Define the command to run when the container starts
CMD ["httpd-foreground"]

