import React from 'react';
import SimpleTable from '../components/mass/SimpleTable';
import SortTable from '../components/mass/SortTable';
import FileFormUPloadArea from '../components/layouts/SampleFormArea';

// ファイル名から自動でルーティングが設定される。この場合は/sampleでマッチ。
// urlになるので、ファイル名はケバブケースが無難。コンポーネント名はキャメルケースなので注意。
const Sample: React.FC = () => {
  return (
    <>
      <div className="p-10 text-appSampleColor">aaa</div>
      sample_page_component
      <div className="bg-gray-100">
        <div className="p-3">
          <SimpleTable></SimpleTable>
          <SortTable></SortTable>
          <FileFormUPloadArea></FileFormUPloadArea>
        </div>
      </div>
    </>
  );
};

export default Sample;
