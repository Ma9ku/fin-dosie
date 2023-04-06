//package com.example.backend.configuration;
//
//import com.example.backend.modelsPhoto.photoDb;
//import com.zaxxer.hikari.HikariDataSource;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Primary;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import javax.sql.DataSource;
//
//@Configuration
//@EnableTransactionManagement
//@EnableJpaRepositories(basePackages = "com.example.backend.repositoryPhoto",
//        entityManagerFactoryRef = "photoEntityManagerFactory",
//        transactionManagerRef = "photoTransactionManager")
//public class PhotoDataSourceConfiguration {
//    @Bean
//    @Primary
//    @ConfigurationProperties("spring.datasource.photo")
//    public DataSourceProperties photoDataSourceProperties() {
//        return new DataSourceProperties();
//    }
//
//    @Bean
//    @Primary
//    @ConfigurationProperties("spring.datasource.photo.configuration")
//    public DataSource photoDataSource() {
//        return photoDataSourceProperties().initializeDataSourceBuilder()
//                .type(HikariDataSource.class).build();
//    }
//
//    @Primary
//    @Bean(name = "photoEntityManagerFactory")
//    public LocalContainerEntityManagerFactoryBean photoEntityManagerFactory(
//            EntityManagerFactoryBuilder builder) {
//        return builder
//                .dataSource(photoDataSource())
//                .packages(photoDb.class)
//                .build();
//    }
//
//    @Primary
//    @Bean(name = "photoTransactionManager")
//    public PlatformTransactionManager photoTransactionManager(
//            final @Qualifier("photoEntityManagerFactory") LocalContainerEntityManagerFactoryBean photoEntityManagerFactory) {
//        return new JpaTransactionManager(photoEntityManagerFactory.getObject());
//    }
//}
