# SvelteKit App with Oracle JSON Reality Views

## Requirements

- Oracle Database 23c or later
- Oracle REST Data Services

I have it set up via docker compose.

```yml
oracle-23c-free:
    container_name: oracle-23c-free
    image: container-registry.oracle.com/database/free:latest
    ports:
      - 15211:1521
    environment:
      - ORACLE_PWD=*******************
      - TZ=Europe/Berlin
    volumes:
      - /home/philipp/dbs/orcl-23c-free/oradata:/opt/oracle/oradata
    hostname: orcl-23c-free
    
oracle-23c-free-ords:
    container_name: oracle-23c-free-ords
    image: container-registry.oracle.com/database/ords:latest
    depends_on:
      - oracle-23c-free
    volumes:
      - /home/philipp/dbs/orcl-23c-free/ords-variables:/opt/oracle/variables
      - /home/philipp/dbs/orcl-23c-free/ords-config:/etc/ords/config
    ports:
      - 15212:8181
    environment:
      - TZ=Europe/Berlin
      - IGNORE_APEX=TRUE
```

Read more on how to set this up: [Oracle Database Free](https://container-registry.oracle.com/ords/ocr/ba/database/free) and [Oracle REST Data Services](https://container-registry.oracle.com/ords/ocr/ba/database/ords).


