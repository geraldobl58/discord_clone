interface ServerIdPagerProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = ({ params }: ServerIdPagerProps) => {
  return (
    <div>
      <div>ServerIdPage - {params.serverId}</div>
    </div>
  );
};

export default ServerIdPage;
