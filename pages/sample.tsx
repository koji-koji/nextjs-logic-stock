// ファイル名から自動でルーティングが設定される。この場合は/sampleでマッチ。
// urlになるので、ファイル名はケバブケースが無難。コンポーネント名はキャメルケースなので注意。
const Sample: React.FC = () => {
  return (
    <>
      <div className="p-10 text-appSampleColor">aaa</div>
      SamplePageComponent
    </>
  );
};

export default Sample;
