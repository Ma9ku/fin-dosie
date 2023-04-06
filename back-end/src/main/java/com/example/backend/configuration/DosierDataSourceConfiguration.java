package com.example.backend.configuration;

import com.example.backend.modelsDossier.*;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.example.backend.repositoryDossier",
        entityManagerFactoryRef = "dossierEntityManagerFactory",
        transactionManagerRef = "dossierTransactionManager")
public class DosierDataSourceConfiguration {
    @Bean
    @Primary
    @ConfigurationProperties("spring.datasource.dossier")
    public DataSourceProperties dossierDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    @Primary
    @ConfigurationProperties("spring.datasource.dossier.configuration")
    public DataSource dossierDataSource() {
        return dossierDataSourceProperties().initializeDataSourceBuilder()
                .type(HikariDataSource.class).build();
    }

    @Primary
    @Bean(name = "dossierEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean dossierEntityManagerFactory(
            EntityManagerFactoryBuilder builder) {
        return builder
                .dataSource(dossierDataSource())
                .packages(esf_all2.class, mv_auto_fl.class, adm.class, dormant.class, equipment.class, mv_fl.class, mv_ul.class, omn.class, orphans.class)
                .build();
    }

    @Primary
    @Bean(name = "dossierTransactionManager")
    public PlatformTransactionManager dossierTransactionManager(
            final @Qualifier("dossierEntityManagerFactory") LocalContainerEntityManagerFactoryBean dossierEntityManagerFactory) {
        return new JpaTransactionManager(dossierEntityManagerFactory.getObject());
    }
}
