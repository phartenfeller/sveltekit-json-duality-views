begin
  ords.enable_schema;

  ords.enable_object(
    p_enabled     => TRUE,
    p_object      => 'ALL_MOVIES_JDV',
    p_object_type => 'VIEW'
  );
end;
/
